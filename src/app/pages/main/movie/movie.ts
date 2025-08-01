import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { YouTubePlayer } from '@angular/youtube-player';
import moviesData from '../../../../assets/movies.json';
import peopleData from '../../../../assets/people.json';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatButtonModule, YouTubePlayer],
  templateUrl: './movie.html',
  styleUrls: ['./movie.scss'],
})
export class Movie implements OnInit {
  movie: any;
  videoId: string | null = null;
  people = peopleData;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movie = moviesData.find(m => m.id.toString() === id);
      if (this.movie?.videoUrl) {
        this.videoId = this.extractYouTubeVideoId(this.movie.videoUrl);
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

  onPersonClick(name: string): void {
    console.log('Clicked person:', name);
    // หรือไปที่หน้าคน เช่น
    this.router.navigate(['/people', name]);
  }
  
  getPersonNameById(id: number): string {
    const person = this.people.find(p => p.id === id);
    return person ? `${person.first_name} ${person.last_name}` : 'Unknown';
  }
}
