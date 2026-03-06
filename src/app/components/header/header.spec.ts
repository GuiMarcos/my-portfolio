import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should keep mobile menu hidden by default', () => {
    const navLinks = fixture.debugElement.query(By.css('.nav-links')).nativeElement as HTMLUListElement;

    expect(navLinks.classList.contains('show')).toBe(false);
  });

  it('should show mobile menu when clicking the menu button', () => {
    const menuButton = fixture.debugElement.query(By.css('.menu-btn')).nativeElement as HTMLButtonElement;
    menuButton.click();
    fixture.detectChanges();

    const navLinks = fixture.debugElement.query(By.css('.nav-links')).nativeElement as HTMLUListElement;
    expect(navLinks.classList.contains('show')).toBe(true);
  });

  it('should close mobile menu when clicking nav links container', () => {
    const menuButton = fixture.debugElement.query(By.css('.menu-btn')).nativeElement as HTMLButtonElement;
    menuButton.click();
    fixture.detectChanges();

    const navLinks = fixture.debugElement.query(By.css('.nav-links')).nativeElement as HTMLUListElement;
    navLinks.click();
    fixture.detectChanges();

    expect(navLinks.classList.contains('show')).toBe(false);
  });
});
