import * as React from 'react';
import styles from './AdvanceSearch.module.scss';
import { IAdvanceSearchProps } from './IAdvanceSearchProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IDropdownStyleProps, ITextFieldStyles, Label, PrimaryButton, TextField } from 'office-ui-fabric-react';
import {TaxonomyPicker,IPickerTerms} from "@pnp/spfx-controls-react/lib/TaxonomyPicker";
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';


//const textFieldStyles: Partial<ITextFieldStyleProps> ={fieldGroup:{width:300}};
const narrowTextFieldStyles:Partial<ITextFieldStyles> ={fieldGroup: {width:100}};

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options1: IDropdownOption[]=[{key:'1',text:'1'},{key:'2',text:'2'},{key:'3',text:'3'},{key:'4',text:'4'},
{key:'5',text:'5'},{key:'6',text:'6'},{key:'7',text:'7'},{key:'8',text:'8'},{key:'9',text:'9'},{key:'10',text:'10'},{key:'11',text:'11'},
{key:'12',text:'12'},{key:'13',text:'13'},{key:'14',text:'14'},{key:'15',text:'15'},
{key:'16',text:'16'},{key:'17',text:'17'},{key:'18',text:'18'},{key:'19',text:'19'},{key:'20',text:'20'},{key:'21',text:'21'},{key:'22',text:'22'},{key:'23',text:'23'},{key:'24',text:'24'},{key:'25',text:'25'},{key:'26',text:'26'},{key:'27',text:'27'},
{key:'28',text:'28'},{key:'29',text:'29'},{key:'30',text:'30'},{key:'31',text:'31'}];


const options2: IDropdownOption[]=[{key:'1',text:'January'},{key:'2',text:'February'},
{key:'3',text:'March'},{key:'4',text:'April'},{key:'5',text:'May'},{key:'6',text:'June'},
{key:'7',text:'July'},{key:'8',text:'August'},{key:'9',text:'September'},{key:'10',text:'October'},
{key:'11',text:'November'},{key:'12',text:'December'}];

const stackTokens:IStackTokens={childrenGap:15};

const options:IDropdownOption[]=[{key:'0',text:'0'},{key:'1',text:'1'},{key:'2',text:'2'}];



export default class AdvanceSearch extends React.Component<IAdvanceSearchProps, {}> {


  private onTaxPickerChange(terms:IPickerTerms){
    this.setState({termKey:terms[0].key.toString()});
    console.log("Terms",terms);
  }
  public render(): React.ReactElement<IAdvanceSearchProps> {
    return (
      <div className={ styles.advanceSearch }>
        {/* <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }> */}
              <span className={ styles.title }>Search The Virtual Achive</span>
              {/* <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
                <span className={ styles.label }>Learn more</span> */}
                <table>
                  <tr><td><Label>Allof these words</Label></td><TextField style={{margin:'0 20px 0 0'}}></TextField><td></td></tr>
                  <tr><td><Label>The exact phrase</Label></td><td><TextField></TextField></td></tr>
                  <tr><td><Label>Business and Company</Label></td><td><TaxonomyPicker
                  allowMultipleSelections={true}
                  termsetNameOrID="Countries"
                  panelTitle="select Term"
                  label=""
                  context={this.props.context}
                  onChange={this.onTaxPickerChange}
                  isTermSetSelectable={false}
                  />
                  </td></tr>
                  <tr><td><Label>Reference Number</Label></td><td><Dropdown
                  options={options}
                  styles={dropdownStyles}
                  />
                  </td><td><TextField></TextField></td><td><TextField></TextField></td></tr>
                  <tr>
                    <td><Label>Between Dates :</Label></td>
                    <td><Dropdown
                    label="Day"
                    options={options1}
                    styles={dropdownStyles}
                    /></td>
                  <td><Dropdown
                       label="Month"
                       options={options2}
                       styles={dropdownStyles}
                       /></td>
                  <td><TextField
                      label="Year"
                      styles={narrowTextFieldStyles}
                  /></td>
                    <td><Label>To</Label></td>
                    <td><Dropdown
                    label="Day"
                    options={options1}
                    styles={dropdownStyles}
                    /></td>
                  <td><Dropdown
                       label="Month"
                       options={options2}
                       styles={dropdownStyles}
                       /></td>
                  <td><TextField
                      label="Year"
                      styles={narrowTextFieldStyles}
                  /></td>
                  </tr>
                  <tr><td><Label>Category and Type</Label></td><td><TaxonomyPicker
                  allowMultipleSelections={true}
                  termsetNameOrID="Countries"
                  panelTitle="select Term"
                  label=""
                  context={this.props.context}
                  onChange={this.onTaxPickerChange}
                  isTermSetSelectable={false}
                  />
                  </td>
                  </tr>
                </table>

      <PrimaryButton style={{float : 'right'}} text="Clear"></PrimaryButton>
      {""}
      <PrimaryButton style={{float: 'right'}} text="Search"></PrimaryButton>
        </div>
  //     </div>
  //   </div>
  // </div>
    );
  }
}
