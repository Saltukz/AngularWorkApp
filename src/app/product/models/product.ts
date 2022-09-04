export class Product {
  ProductId : number;
  ProductName : string;
  SupplierId : number;
  CategoryId : number;
  QuantityPerUnit : string;
  UnitPrice : number;
  UnitsInStock : number;
  UnitsOnOrder : number;
  ReorderLevel : number;
  Discontinued : boolean;

  constructor(){
    this.ProductId = 0;
    this.CategoryId = 0;
    this.ProductName = "";
    this.SupplierId = 0;
    this.QuantityPerUnit = "0";
    this.UnitPrice = 0;
    this.UnitsInStock = 0 ;
    this.UnitsOnOrder  = 0;
    this.ReorderLevel = 0;
    this.Discontinued = false;
  }
}
