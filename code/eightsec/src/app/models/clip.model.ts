export class Clip {
  constructor(
    public id: string,
    public weekNumber: number,
    public weekDate: Date,
    public nickname: string,
    public votes: number,
    public caption: string,
    public imageUrl: string
  ) {}
}
