import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatExpansionModule} from "@angular/material/expansion";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {LawyerService} from "../../services/lawyer.service";
import {LawyerResponse} from "../../model/laywerResponse";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

let TREE_DATA: FoodNode[] = [
  {
    name: 'EXPERTISE FIELDS',
    children: []
  }
]

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
    RouterLink,
  ],
  templateUrl: './lawyer-profile-page.component.html',
  styleUrl: './lawyer-profile-page.component.css'
})
export class LawyerProfilePageComponent implements OnInit,OnDestroy{
  panelOpenState = false;
  lawyer:LawyerResponse;
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

  lawyerId: string;


  constructor(private activateRoute: ActivatedRoute,private lawyerService: LawyerService) {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.lawyerId = params['id'];
    })
    this.getLawyerById();

  }
  ngOnDestroy() {
    TREE_DATA[0].children = []
  }

  getLawyerById() {
    this.lawyerService.getLawyer(this.lawyerId).subscribe({
      next: value => {
        this.lawyer= value;
        value.expertiseFieldResponseList?.map(value1 => TREE_DATA[0].children.push({name:value1.name}));
        this.dataSource.data = TREE_DATA;
      },
      error:err => {

      }
    })
  }

}
