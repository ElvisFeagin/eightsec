export class Clip {
  constructor(
    public id: string,
    public uploadDate: Date,
    public weekDate: Date,
    public weekNumber: number,
    public nickname: string,
    public votes: number,
    public caption: string,
    public imageUrl: string
  ) {}
}
