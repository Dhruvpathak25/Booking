import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [disease, setDisease] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [diseaseError, setDiseaseError] = useState('');

  const handleBookSlot = () => {
    let hasError = false;

    // Perform validation
    if (!fullName) {
      setFullNameError('Please enter your full name');
      hasError = true;
    } else {
      setFullNameError('');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Please enter your phone number');
      hasError = true;
    } else {
      setPhoneNumberError('');
    }

    if (!email) {
      setEmailError('Please enter your email');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!disease) {
      setDiseaseError('Please enter the disease');
      hasError = true;
    } else {
      setDiseaseError('');
    }

    if (hasError) {
      return;
    }

    if (!appointmentDate) {
      // Show error if appointment date is not selected
      setShowDatePicker(true);
      return;
    }

    // Navigate to slots screen and pass selected date
    navigation.navigate('Slot', {selectedDate: appointmentDate});
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    setAppointmentDate(selectedDate || new Date());
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.heading}>Appointment</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => {
            phoneNumberInput.focus();
          }}
        />
        <Text style={styles.error}>{fullNameError}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          keyboardType="phone-pad"
          returnKeyType="next"
          ref={input => {
            phoneNumberInput = input;
          }}
          onSubmitEditing={() => {
            emailInput.focus();
          }}
        />
        <Text style={styles.error}>{phoneNumberError}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          returnKeyType="next"
          ref={input => {
            emailInput = input;
          }}
          onSubmitEditing={() => {
            diseaseInput.focus();
          }}
        />
        <Text style={styles.error}>{emailError}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Disease</Text>
        <TextInput
          value={disease}
          onChangeText={setDisease}
          style={styles.input}
          returnKeyType="next"
          ref={input => {
            diseaseInput = input;
          }}
          onSubmitEditing={showDatepicker}
        />
        <Text style={styles.error}>{diseaseError}</Text>
      </View>
      <Text style={styles.label}>Appointment Date:</Text>
      <View>
        <Button title="Select Date" onPress={showDatepicker} />
        {showDatePicker && (
          <DateTimePicker
            value={appointmentDate}
            mode="date"
            minimumDate={new Date()}
            maximumDate={
              new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
            } // 7 days from current date
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
      <Button onPress={handleBookSlot} title="Book Slot" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
  },
});

export default FormScreen;
