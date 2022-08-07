import { TestBed } from '@angular/core/testing';

import { S3ServiceService } from './s3-service.service';

describe('S3ServiceService', () => {
  let service: S3ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
