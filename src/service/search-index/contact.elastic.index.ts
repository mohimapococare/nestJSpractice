/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { SearchServiceInterface } from "../interface/search.service.interface";
import { productIndex } from "../constant/product.elastic";
import { Contact1 } from "src/contacts1/entities/contact1.schema";
import { ObjectId } from "mongodb";
@Injectable()
export class ProductElasticIndex {
  constructor(
    @Inject("SearchServiceInterface")
    private readonly searchService: SearchServiceInterface<any>
  ) {}

  public async insertProductDocument(contact: Contact1): Promise<any> {
    const data = this.productDocument(contact);
    return this.searchService.insertIndex(data);
  }

  public async updateProductDocument(contact: Contact1): Promise<any> {
    const data = this.productDocument(contact);
    await this.deleteProductDocument(contact.id);
    return this.searchService.insertIndex(data);
  }

  private async deleteProductDocument(prodId: ObjectId): Promise<any> {
    const data = {
      index: productIndex._index,
      type: productIndex._type,
      id: prodId.toString()
    };
    return this.searchService.deleteDocument(data);
  }

  private bulkIndex(productId: ObjectId): any {
    return {
      _index: productIndex._index,
      _type: productIndex._type,
      _id: productId
    };
  }

  private productDocument(contact: Contact1): any {
    const bulk = [];
    bulk.push({
      index: this.bulkIndex(contact.id)
    });
    bulk.push(contact);
    return {
      body: bulk,
      index: productIndex._index,
      type: productIndex._type
    };
  }
}
