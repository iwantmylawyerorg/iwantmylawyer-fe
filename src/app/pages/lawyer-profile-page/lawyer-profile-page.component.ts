import { Component } from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatExpansionModule} from "@angular/material/expansion";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'EXPERTISE FIELDS',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'},{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'},{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-lawyer-profile-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './lawyer-profile-page.component.html',
  styleUrl: './lawyer-profile-page.component.css'
})
export class LawyerProfilePageComponent {
  panelOpenState = false;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
