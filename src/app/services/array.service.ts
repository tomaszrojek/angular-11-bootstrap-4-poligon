import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

export class ArrayService {
  constructor() {}

  /**
   * Updates or inserts item into array and makes copy of array
   */
  public static updateOrInsertItemWithArrayCopy<T>(
    source: T[],
    predicate: (value: T) => boolean,
    item: T
  ): any[] {
    let index = source.findIndex(predicate);
    index = index < 0 ? source.length : index;
    return [...source.slice(0, index), item, ...source.slice(index + 1)];
  }

  /**
   * Updates item in array and makes copy of array
   */
  public static updateItemWithArrayCopy<T>(
    source: T[],
    predicate: (value: T) => boolean,
    item: T
  ): any[] {
    let index = source.findIndex(predicate);
    if (index >= 0) {
      return [...source.slice(0, index), item, ...source.slice(index + 1)];
    }
    return [...source];
  }

  /**
   * removes item of array if exists otherwise do nothing
   * Always returns copy of array
   * */
  public static removeItemWithArrayCopy<T>(
    source: T[],
    predicate: (value: T) => boolean
  ): any[] {
    let index = source.findIndex(predicate);
    index = index < 0 ? source.length : index;
    return [...source.slice(0, index), ...source.slice(index + 1)];
  }

  public static forEachExistingTargetItems<T>(
    targetItems: T[],
    sourceItems: T[],
    sourcePredicate: (sourceItem: T, targetItem: T) => boolean,
    targetOperation: (sourceItem: T, targetItem: T) => T
  ): T[] {
    let result = targetItems.map((tItem) => {
      let rItem = { ...tItem };
      let sItem = sourceItems.find((si) => sourcePredicate(si, tItem));
      if (sItem != undefined) {
        rItem = targetOperation(sItem, tItem);
      }
      return rItem;
    });
    return result;
  }
}
