export interface Line {
  primaryKey: number,
  label: string,
  relations: {
    paths: number[],
    route: number,
    stops: number[],
  }
}

export interface Path {
  type: 'Feature',
  geometry: {
    type: 'LineString',
    coordinates: [number, number][],
  },
  properties: {
    primaryKey: number,
    relations: {
      busStops: [number, number],
      lines: number[],
    },
  },
}

export interface Stop {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [number, number],
  },
  properties: {
    primaryKey: number,
    label: string,
    relations: {
      lines: number[],
    },
  }
}

export interface Route {
  primaryKey: number,
  label: string
  relations: {
    lines: number[],
  },
}
