import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  /**
   * Color of the button
   */
  @Input()
  public color: 'default' | 'primary' | 'secondary' | 'info' | 'warning' =
    'default';

  /**
   * Size of the button
   */
  @Input()
  public size: 'small' | 'medium' | 'large' = 'small';

  /**
   * Shape of the button
   */
  @Input()
  public shape: 'squared' | 'rounded' | 'pilled' | 'circle' = 'squared';

  /**
   * Outline button
   */

  @Input()
  public outlined: 'outlined' | 'not-out' = 'not-out';

  constructor() {}

  ngOnInit(): void {}
}
