import {Personnage} from "./personnage";

export interface AuthStatus {
  logged: boolean,
  personnage? : Personnage
}
