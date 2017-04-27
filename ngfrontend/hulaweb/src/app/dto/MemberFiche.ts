export class MemberFiche {

  nickName: string;
  introduction: string;
  picture: HTMLImageElement;

  constructor(nickName:string, introduction:string, picture: HTMLImageElement) {
    this.nickName = nickName;
    this.introduction = introduction;
    this.picture = picture;
  }
}
