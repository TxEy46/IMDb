import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import moviesData from '../../../assets/movies.json';
import peoplesData from '../../../assets/people.json';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, ],
  templateUrl: './main.html',
  styleUrls: ['./main.scss']   // แก้ชื่อจาก styleUrl เป็น styleUrls
})
export class Main {
  movies = moviesData;  // เก็บข้อมูลหนังทั้งหมด
  movie: any = null;  // ตัวแปรเก็บหนังที่เลือก
  peoples = peoplesData;  // เก็บข้อมูลสมาชิกทั้งหมด
  people: any = null;  // ตัวแปรเก็บสมาชิกที่เลือก

  constructor(private router: Router) {
    console.log(this.movies, this.peoples);
  }

  findOneMovie(idInput: HTMLInputElement) {
    const id = idInput.value;
    this.movie = null;
    for (const lm of this.movies) {  // ต้องวนลูปจาก movies ไม่ใช่ movie
      if (lm.id.toString() === id) {  // สมมติใช้ `idx` เป็น id
        this.movie = lm;
        break;
      }
    }
    if (!this.movie) {
      console.log('Movie not found');
    }
  }
  showDetailsMovie(movie: any) {
    this.movie = movie;  // เก็บหนังที่เลือกเพื่อแสดงรายละเอียด
    console.log('Selected movie:', this.movie);
  }

  findOnepeople(idInput: HTMLInputElement) {
    const id = idInput.value;
    this.people = null;
    for (const lm of this.peoples) {  // ต้องวนลูปจาก people ไม่ใช่ movie
      if (lm.id.toString() === id) {  // สมมติใช้ `idx` เป็น id
        this.people = lm;
        break;
      }
    }
    if (!this.people) {
      console.log('people not found');
    }
  }
  showDetailspeople(people: any) {
    this.people = people;
    console.log('Selected people:', this.people);
  }
}
