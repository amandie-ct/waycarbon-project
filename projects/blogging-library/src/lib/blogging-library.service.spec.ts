import { TestBed } from '@angular/core/testing';

import { BloggingLibraryService } from './blogging-library.service';

describe('BloggingLibraryService', () => {
  let service: BloggingLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggingLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
