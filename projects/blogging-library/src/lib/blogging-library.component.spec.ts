import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingLibraryComponent } from './blogging-library.component';

describe('BloggingLibraryComponent', () => {
  let component: BloggingLibraryComponent;
  let fixture: ComponentFixture<BloggingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggingLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloggingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
