import { TestBed } from "@angular/core/testing";
import { ToppingsService } from "./toppings.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from "@angular/common/http";
import { Topping } from "../models/topping.model";

describe('ToppingsService', () => {
    let service: ToppingsService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ToppingsService]
      });

      httpClient = TestBed.inject(HttpClient)
      httpTestingController = TestBed.inject(HttpTestingController)
      service = TestBed.inject(ToppingsService)
    });

    afterEach(() => {
        httpTestingController.verify()
    })
  
    it('should create', () => {
      expect(service).toBeTruthy();
    });

    it('should getToppings()', (done: DoneFn) => {
        const mockToppings: Topping[] = [
            { id: 0, name: 'tomato', price: 1 },
            { id: 2, name: 'cheese', price: 4 },
        ]

        service.getToppings().subscribe(toppings => {
            expect(toppings).toEqual(mockToppings)
            done()
        })

        const req = httpTestingController.expectOne('https://retoolapi.dev/udhTkG/toppings')
        expect(req.request.method).toBe('GET')
        
        req.flush(mockToppings)
    })

  });