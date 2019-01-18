
export interface ExtractedIndex {
  indexname: string;
  unique: boolean;
  struct: 'BTREE' | 'HASH' | 'GIST' | 'GIN';
  cols: string[];
}

export interface ExtractedColumn {
  columnname: string;
  position: number;
  nullable: boolean;
  primary_key: boolean;
  column_default: string;
  type: string;
}

export interface ExtractedTable {
  schemaname: string;
  tablename: string;
  columns: ExtractedColumn[];
  indices: ExtractedIndex[];
}

export interface ExtractedView {
  schemaname: string;
  viewname: string;
  columns: ExtractedColumn[];
  indices: ExtractedIndex[];
}

export interface ExtractedView {
  schema: string;
  table: string;
  columns: ExtractedColumn[];
}

export interface ExtractedSchema {
  schema: string;
  tables: ExtractedTable[];
  views: ExtractedView[];
}

type TypeCategory = 'A' | 'B' | 'C' | 'D' | 'E' | 'G' | 'I' | 'N' | 'P' | 'S' | 'T' | 'U' | 'V' | 'X';

export interface ExtractedType {
  typname: string;
  typcategory: TypeCategory;
  typlen: number;
  typelem: number;
  typndims: number | null;
  typbyval: boolean;
}

export interface ExtractedFunctions {
  proname: string;
  numargs: number;
  isagg: boolean;
  iswindow: boolean;
  isvariadic: boolean;
  returntype: ExtractedType;
}

export interface FullExtraction {
  schemas: Array<{
    name: string;
    tables: ExtractedTable[];
    views: ExtractedView[];
    indexes: ExtractedIndex[];
  }>;
}
