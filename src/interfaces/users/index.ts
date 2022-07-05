export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUserUpdate {
  name: string;
  email: string;
  age: number;
}
