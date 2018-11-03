import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IField, IMatch } from 'src/app/shared/Field.model';
import { SkillModel } from '../user-profile/user-profile.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiPath = 'http://api.arbetsformedlingen.se/af/v0/platsannonser/';
  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getFields(): Observable<IField[]> {
    return this.http.get<any>(this.apiPath + 'soklista/yrkesomraden').pipe(map(x => {
      return x.soklista.sokdata
        // tslint:disable-next-line:max-line-length
        .map(field => <IField>{ id: field.id, namn: field.namn, antal_platsannonser: field.antal_platsannonser, antal_ledigajobb: field.antal_ledigajobb });
    }));
  }

  getProfession(id: string): Observable<any[]> {
    return this.http.get<any>(this.apiPath + 'soklista/yrkesgrupper?yrkesomradeid=' + id).pipe(map(x => {
      return x.soklista.sokdata
        // tslint:disable-next-line:max-line-length
        .map(field => <IField>{ id: field.id, namn: field.namn, antal_platsannonser: field.antal_platsannonser, antal_ledigajobb: field.antal_ledigajobb });
    }));
  }

  getJobPostings(id: string): Observable<any[]> {
    return this.http.get<any>(this.apiPath + 'matchning?yrkesid=' + id).pipe(map(x => {
      if (x.matchningslista && x.matchningslista.matchningdata) {
        return x.matchningslista.matchningdata.
          map(match => <IMatch>{
            annonsId: match.annonsid,
            annonsrubrik: match.annonsrubrik,
            annonsurl: match.annonsurl,
            anstallningstyp: match.anstallningstyp,
            arbetsplatsnamn: match.arbetsplatsnamn,
            kommunnamn: match.kommunnamn,
            lan: match.lan,
            yrkesbenamning: match.yrkesbenamning,
            publiceraddatum: new Date(match.publiceraddatum),
            sista_ansokningsdag: new Date(match.sista_ansokningsdag)
          });
      } else {
        return [];
      }
    }));
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  setSkill(field: SkillModel) {
    this.subject.next(field);
  }
}
