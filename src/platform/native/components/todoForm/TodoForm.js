import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less';
  }
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 40) {
    errors.description = 'Must be 15 characters or less';
  }
  return errors;
};

const styles = StyleSheet.create({
  multiline: {
    height: 60,
    fontSize: 16,
    padding: 4,
    marginBottom: 10,
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
  singleLineWithHeightTextInput: {
    height: 30,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

class TodoForm extends Component {
  static propTypes = {
    fields: PropTypes.object,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
  }

  render() {
    const { fields: { title, description }, onSubmit } = this.props;
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter title"
          autoCorrect={false}
          {...title}
          style={styles.singleLine}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Enter description"
          multiline
          autoCorrect={false}
          {...description}
          style={styles.multiline}
        />
        <TouchableOpacity onPress={() => onSubmit({ title: title.value, description: description.value })}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default reduxForm(
  {
    form: 'todo',
    fields: ['title', 'description'],
    validate,
  },
  state => ({ initialValues: state.todos.selectedTodo }),
)(TodoForm);
