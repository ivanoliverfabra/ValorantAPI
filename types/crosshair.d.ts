type Crosshair = string; // Responds in binary in form of a string

type CrosshairResponse = Crosshair | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 503>[];
};