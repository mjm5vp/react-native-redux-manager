import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
        <Input
          label='Name'
          placeholder='Jane'
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
        />
      </CardSection>

      <CardSection>
        <Input
          label='Phone'
          placeholder='555-555-5555'
          value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Select a shift:</Text>
        <Picker
          selectedValue={this.props.shiftDay}
          onValueChange={day => this.props.employeeUpdate({ prop: 'shiftDay', value: day })}
        >
          <Picker.item label='Monday' value='Monday' />
          <Picker.item label='Tuesday' value='Tuesday' />
          <Picker.item label='Wednesday' value='Wednesday' />
          <Picker.item label='Thursday' value='Thursday' />
          <Picker.item label='Friday' value='Friday' />
          <Picker.item label='Saturday' value='Saturday' />
          <Picker.item label='Sunday' value='Sunday' />
        </Picker>
      </CardSection>

      <CardSection>
        <Button>
          Create
        </Button>
      </CardSection>
    </Card>

    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shiftDay } = state.employeeForm;
  return { name, phone, shiftDay };
};

export default connect(mapStateToProps, {
  employeeUpdate
}
)(EmployeeCreate);
