import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCarouselComponent } from './article-carousel.component';

describe('ArticleCarouselComponent', () => {
  let component: ArticleCarouselComponent;
  let fixture: ComponentFixture<ArticleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
