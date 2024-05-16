import {Component, inject, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AsyncPipe, DatePipe, formatDate, NgClass, NgStyle} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";
import {LawyerResponse} from "../../model/laywerResponse";
import {LawyerService} from "../../services/lawyer.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CreatePostDialogComponent} from "../../create-post-dialog/create-post-dialog.component";
import {PostService} from "../../services/post.service";
import {PostResponse} from "../../model/postResponse";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {LikeService} from "../../services/like.service";
import {LikeResponse} from "../../model/likeResponse";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    FaIconComponent,
    MatMenuModule,
    RouterLink,
    AILawyerComponent,
    MatDialogModule,
    NgStyle,
    NgClass,
    InfiniteScrollModule,
  ]
})
export class SidebarComponent implements OnInit {
  faHeart = faBars;
  posts: PostResponse = {content: [], totalElements: 0};
  lawyer: LawyerResponse;
  lawyerId: string;
  userId: string;
  role = "";
  page = 0;
  size = 5;
  isVisible = false;


  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router,
              private lawyerService: LawyerService,
              public dialog: MatDialog,
              private postService: PostService,
              private likeService:LikeService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreatePostDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private loadInitialPosts() {
    this.getAllPosts();
    this.onScroll();
  }

  onScroll() {
    if (this.posts.content.length < this.posts.totalElements) {
      this.page++;
      this.getAllPosts();
    } else {
      this.isVisible = true;
    }
  }
  isLiked(likeResponseList: LikeResponse[], userId: string): boolean {
    return likeResponseList.some(like => like.userResponse.id === userId);
  }

  getLawyerId() {
    if (localStorage.getItem("acces_token")) {
      // @ts-ignore
      this.lawyerId = localStorage.getItem("id")

      return true;
    } else {
      return false
    }
  }

  getAllPosts() {
    this.postService.getAllPosts(this.page, this.size).subscribe(
      {
        next: value => {
          this.posts.content = [...this.posts.content, ...value.content];
          console.log(value);
          this.posts.totalElements = value.totalElements;
        }
        , error: err => {
          console.log(err);
        }
      }
    )
  }

  getLawyerById() {
    this.lawyerService.getLawyer(this.lawyerId).subscribe({
      next: value => {
        this.lawyer = value;
      },
      error: err => {

      }
    })
  }

  ngOnInit(): void {
    this.getLawyerId()
    this.getLawyerById();
    this.loadInitialPosts();
    this.role = localStorage.getItem('role');
    this.userId = localStorage.getItem('id');
  }

  protected readonly localStorage = localStorage;

  sendLike(postId: string) {
    this.likeService.createLike({postId: postId,userId:this.userId}).subscribe({
      next: value => {
        const likedPost = this.posts.content.find(post => post.id === postId);
        if (likedPost) {
          likedPost.likeResponseList.push({id:"",localDateTime:new Date(), userResponse: { id: this.userId,email:"",firstName:"",lastName:"",role:"" }});
        }
      },
      error: error => {
        console.log(error);
      }
    })
  }
  deleteLike(postId:string,userId:string){
    this.likeService.deleteLike(postId,userId).subscribe(
      {
        next: value => {
          const postIndex = this.posts.content.findIndex(post => post.id === postId);
          if (postIndex !== -1) {
            const deletedLikeIndex = this.posts.content[postIndex].likeResponseList.findIndex(like => like.userResponse.id === userId);
            if (deletedLikeIndex !== -1) {
              this.posts.content[postIndex].likeResponseList.splice(deletedLikeIndex, 1);
            }
          }
        },
        error: error => {
          console.log(error);
        }
      })
  }

  handleClick(postId:string,likeResponseList: LikeResponse[]) {
    if (this.isLiked(likeResponseList, this.userId)) {
      this.deleteLike(postId,this.userId)
    } else {
      this.sendLike(postId);
    }
  }
}
