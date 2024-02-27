import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IComment } from '../../types/comment.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { IUser } from '../../types/user.interface';
import localeBR from '@angular/common/locales/pt';
import { UserIdService } from '../../../services/userid.service';
import { UserService } from '../../../services/user.service';
import { UsersLocalService } from '../../../services/userslocal.service';
registerLocaleData(localeBR);
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CommentFormComponent],
  providers: [UserIdService, UserService, UsersLocalService],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})

export class CommentComponent implements OnInit {
  @Input() comment!: IComment;
  @Input() currentUserId!: number;
  @Input() replies!: IComment[];
  @Input() activeComment!: number;
  @Input() respondsTo: number | null = null;
  @Output() setActiveComment = new EventEmitter<IComment["id"]>();
  @Output() addComment = new EventEmitter<{text: string, respondsTo: number | null}>();
  userId: number = 0;
  user!: IUser;
  canReply: boolean = false;
  replyId: number | null = null;
  faRetweet = faRetweet;
  faFlag = faFlag;
  
  constructor(private userService: UserService, private userIdService: UserIdService, private usersLocalService: UsersLocalService) {
  }

  ngOnInit(): void {
    this.canReply = Boolean(this.currentUserId);
    this.replyId = this.respondsTo ? this.respondsTo : this.comment.id;
    this.userIdService.currentUser.subscribe(user => this.user = user);
  }

  setUser(userId: number) {
    // this.user = this.usersLocalService.getUsers(userId);
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
      console.log(` Usuário sendo setado com sucesso: ${this.user}`);
      this.userIdService.changeCurrentUser(user);
      })
  }
}
