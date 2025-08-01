import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import peopleData from '../../../../assets/people.json';
import { YouTubePlayer } from "@angular/youtube-player";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, MatButtonModule, YouTubePlayer],
  templateUrl: './people.html',
  styleUrls: ['./people.scss'],
})
export class People implements OnInit {
  m: any;
  videoId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.m = peopleData.find(m => m.id.toString() === id);
      if (this.m?.videoUrl) {
        this.videoId = this.extractYouTubeVideoId(this.m.videoUrl);
      }
    }
  }

  extractYouTubeVideoId(url: string): string | null {
    const match = url.match(/(?:embed\/|v=|\/videos\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  goBack() {
    this.router.navigateByUrl('/', { skipLocationChange: false });
  }
}
