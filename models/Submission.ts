import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema({
  role: String,
  
  // Common fields
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  
  // Patient-specific fields
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  bloodGroup: String,
  emergencyContactName: String,
  emergencyContactRelation: String,
  emergencyContactPhone: String,
  medicalConditions: String,
  currentMedications: String,
  allergies: String,
  previousSurgeries: String,
  insuranceProvider: String,
  insurancePolicyNumber: String,
  insuranceGroupId: String,
  preferredPaymentMethod: String,
  
  // Doctor-specific fields
  fullName: String,
  licenseNumber: String,
  specialization: String,
  yearsOfExperience: Number,
  medicalSchool: String,
  graduationYear: Number,
  boardCertifications: String,
  hospitalAffiliations: String,
  clinicAddress: String,
  consultationFee: Number,
  availableDays: [String],
  availableTimeSlots: String,
  languagesSpoken: [String],
  telemedicineAvailable: Boolean,
  acceptsInsurance: Boolean,
  insuranceNetworks: String,
  
  // NGO-specific fields
  organizationName: String,
  registrationNumber: String,
  establishedDate: Date,
  mission: String,
  websiteUrl: String,
  contactPersonName: String,
  contactPersonDesignation: String,
  areasOfOperation: [String],
  servicesOffered: String,
  targetBeneficiaries: String,
  annualBudget: String,
  fundingSources: String,
  numberOfVolunteers: Number,
  numberOfStaff: Number,
  previousHealthcareProjects: String,
  partnershipsCollaborations: String,
  
  // Common submission metadata
  signatureFilename: String,
  signatureBase64: String,
  uniqueId: String,
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
})

export default mongoose.models.Submission || mongoose.model('Submission', submissionSchema)
