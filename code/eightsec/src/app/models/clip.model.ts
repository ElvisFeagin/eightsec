export class Clip {
  constructor(
    public id: string,
    public uploadDate: Date,
    public weekDate: Date,
    public weekNumber: number,
    public nickname: string,
    public caption: string,
    public imageUrl: string,
    public isHeat: boolean,
    public votes: number
  ) {}
}
