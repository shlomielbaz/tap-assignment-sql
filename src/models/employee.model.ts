import { RowDataPacket } from "mysql2";

export default interface Employee extends RowDataPacket {
  id?: number;
  title?: string;
  salary?: number;
}
