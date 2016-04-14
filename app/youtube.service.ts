import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Youtube} from './video';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class YoutubeService {

  constructor (private http: Http) {}

  //Your API key to Youtube
  private youtubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=Angels+and+airwaves&type=video&key=AIzaSyC0XIZRbnmx3dXpFz7jv_95r60Jf0RzzIE';

  //Get videos
  getVideos() {
    return this.http.get(this.youtubeURL)
      .map(res => <Youtube[]> res.json().items)
      .do(data => console.log(data))
      .catch(this.errorHandler);
  }
  private errorHandler (error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }

}
