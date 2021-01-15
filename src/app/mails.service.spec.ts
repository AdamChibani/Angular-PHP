import { TestBed } from '@angular/core/testing';

import { MailsService } from './mails.service';

describe('MailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailsService = TestBed.get(MailsService);
    expect(service).toBeTruthy();
  });
});
