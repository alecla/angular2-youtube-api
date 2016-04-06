import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Youtube} from './video';
import {YoutubeService} from './youtube.service';

@Component({
  selector: 'youtube',
  templateUrl: '../templates/youtube.html',
  providers: [HTTP_PROVIDERS,YoutubeService]
})

export class YoutubeComponent implements OnInit{

  errorMessage: string;
  videos: Youtube[];
  selectedID: string;
  vidLink: string;
  display: string;

  constructor (private _youtubeService: YoutubeService) {}

  vidSelect(video: string) {
    this.selectedID = video;
    this.vidLink = `https://youtube.com/embed/${this.selectedID}`;
  }

  ngOnInit() { this.getVideos();}

  getVideos() {
    this._youtubeService.getVideos()
      .subscribe(
        videos => this.videos = videos,
        error => this.errorMessage = <any>error
      );
  }

  goBack(){

    this.vidLink = null;

  }

}
