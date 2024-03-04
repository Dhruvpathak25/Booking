import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SlotScreen = ({route}) => {
  const {selectedDate} = route.params;
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    {startTime: '08:00 AM', endTime: '10:00 AM'},
    {startTime: '10:00 AM', endTime: '12:00 PM'},
    {startTime: '12:00 PM', endTime: '02:00 PM'},
    {startTime: '02:00 PM', endTime: '04:00 PM'},
    {startTime: '04:00 PM', endTime: '06:00 PM'},
    {startTime: '06:00 PM', endTime: '08:00 PM'},
  ];

  const handleSlotSelection = slot => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    if (!selectedSlot) {
      alert('Please select a slot before booking.');
      return;
    }

    alert(
      `Your appointment on ${selectedDate.toDateString()} at ${
        selectedSlot.startTime
      } - ${selectedSlot.endTime} has been successfully booked.`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Available Slots for {selectedDate.toDateString()}
      </Text>
      <View style={styles.slotsContainer}>
        {timeSlots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slotItem,
              selectedSlot === slot && styles.selectedSlot,
            ]}
            onPress={() => handleSlotSelection(slot)}>
            <Text
              style={[
                styles.slotText,
                selectedSlot === slot && styles.selectedSlotText,
              ]}>
              {slot.startTime} - {slot.endTime}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={handleBookAppointment}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  slotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  slotItem: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  slotText: {
    fontSize: 16,
  },
  selectedSlot: {
    borderColor: 'red',
  },
  selectedSlotText: {
    color: 'red',
  },
  bookButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SlotScreen;
