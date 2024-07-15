// src/app/dashboard/components/sidebar/sidebar.component.ts
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { GuestUser } from 'src/app/shared/models/model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Item } from 'src/app/shared/models/model';

@Component({
  selector: 'app-pcic-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class PcicSidebarComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchQuery: string = '';

  routes = routes;
  public isOpen: { [key: string]: boolean } = {
    dashboard: false,
    users: false,
    assignment: false,
    standardReport: false,
    customReport: false,
  };
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  private routerSubscription: Subscription | undefined;
  public currentRoute: string = '';

  public paths = [
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'Users', route: this.routes.users },
    { title: 'Assignment', route: this.routes.assignment },
    { title: 'Standard Report', route: this.routes.standard_report },
    { title: 'Custom Report', route: this.routes.custom_report },
  ];

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    const guestUserJson = sessionStorage.getItem('guestUser');
    if (guestUserJson) {
      const guestUser = JSON.parse(guestUserJson);
      this.supabaseService.setGuestUser(guestUser);
    }

    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
      }
    );

    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });

    // Set default route to /dashboard if none is provided
    if (!this.currentRoute) {
      this.currentRoute = this.routes.dashboard;
      this.router.navigate([this.routes.dashboard]);
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery'] && this.searchQuery) {
      this.handleSearch();
    }
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    return user !== null && 'user_type' in user;
  }

  getUserRole(): string | null {
    if (this.isGuestUser(this.user)) {
      return this.user.user_type;
    }
    return this.user?.email || null;
  }

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  handleSearch() {
    const userType = this.getUserRole();
    let allItems: Item[] = [];

    if (userType === 'Regional_Admin' || userType === 'National_Admin') {
      allItems = [...this.paths];
    }

    const matchedItem = allItems.find((item: Item) => {
      return item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });

    if (matchedItem) {
      if (matchedItem.route) {
        this.router.navigate([matchedItem.route]);
      }
    }
  }

  async logout() {
    if (this.isGuestUser(this.user)) {
      sessionStorage.removeItem('guestUser');
      this.supabaseService.setGuestUser(null);
    } else {
      try {
        await this.supabaseService.signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
    this.user = null;
    this.router.navigate(['/home']);
  }

  loginAsGuest(userType: string) {
    const guestUser: GuestUser = {
      id: 'guest-' + Date.now(),
      email: `guest-${userType}@example.com`,
      user_type: userType,
    };
    sessionStorage.setItem('guestUser', JSON.stringify(guestUser));
    this.supabaseService.setGuestUser(guestUser);
    this.router.navigate(['/dashboard']);
  }

  isActive(route: string | undefined): boolean {
    return route ? this.currentRoute === route : false;
  }

  trackByTitle(index: number, item: Item): string {
    return item.title;
  }
}
