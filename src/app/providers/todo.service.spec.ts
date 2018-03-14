import { TestBed, inject } from '@angular/core/testing';

import { TodosService } from './todo.service';

describe('CasasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService]
    });
  });

  it('should be created', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
