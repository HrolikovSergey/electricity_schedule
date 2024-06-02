export type Schedule = {
    id: number;
    address: string;
    title: string;
    schedule: DaySchedule[];
}
export type DaySchedule = {
    day: number;
    title: string;
    schedule: boolean[]
}

export type ScheduleApiResponse = {
    SearchId: number,
    SearchMsg: string,
    SheduleTitle: string,
    Shedule: DayScheduleApiResponse[]
}

export type DayScheduleApiResponse = {
    DayNo: number,
    DayName: string,
    H01: number,
    H02: number,
    H03: number,
    H04: number,
    H05: number,
    H06: number,
    H07: number,
    H08: number,
    H09: number,
    H10: number,
    H11: number,
    H12: number,
    H13: number,
    H14: number,
    H15: number,
    H16: number,
    H17: number,
    H18: number,
    H19: number,
    H20: number,
    H21: number,
    H22: number,
    H23: number,
    H24: number
}