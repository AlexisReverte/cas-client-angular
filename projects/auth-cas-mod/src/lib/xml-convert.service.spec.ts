import { TestBed, inject } from '@angular/core/testing';

import { XmlConvertService } from './xml-convert.service';

describe('XmlConvertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlConvertService]
    });
  });

  it('should be created', inject([XmlConvertService], (service: XmlConvertService) => {
    expect(service).toBeTruthy();
  }));
});
