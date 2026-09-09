import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PARTICIPATION_TYPES } from '../data/participationTypes';

export default function Screen2Registration() {
	const [formData, setFormData] = useState({
		nameOrOrganisation: '',
		mobileNumber: '',
		otp: '',
		email: '',
		participationType: '',
		state: '',
		district: '',
		cityVillageLocality: '',
		consent: false
	});

	const [otpSent, setOtpSent] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handleSendOtp = (e) => {
		e.preventDefault();
		if (formData.mobileNumber.trim().length >= 10) {
			setOtpSent(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Phase 1 Scope: UI only. No Firebase Auth or Firestore writes.
	};

	return (
		<div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 20px', fontFamily: 'inherit' }}>
			<div style={{ maxWidth: '640px', margin: '0 auto', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
				<div style={{ marginBottom: '24px' }}>
					<Link to="/" style={{ textDecoration: 'none', color: '#15803d', fontSize: '13px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
						← Back to Public Portal
					</Link>
					<div style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#15803d', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '3px 10px', borderRadius: '999px', marginBottom: '8px' }}>
						Member Intake Stage 1
					</div>
					<h1 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', margin: '0 0 6px' }}>Join ECF / Registration</h1>
					<p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Register your entity to enter the sovereign member journey and environmental asset vault.</p>
				</div>

				<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<div>
						<label htmlFor="nameOrOrganisation" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>Name / Organisation <span style={{ color: '#ef4444' }}>*</span></label>
						<input type="text" id="nameOrOrganisation" name="nameOrOrganisation" value={formData.nameOrOrganisation} onChange={handleChange} placeholder="e.g. Apex Industrial Works or Amitsinh Vaghela" required style={{ width: '100%', padding: '10px 14px', borderRadius: '7px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }} />
					</div>

					<div>
						<label htmlFor="mobileNumber" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>Mobile Number <span style={{ color: '#ef4444' }}>*</span></label>
						<div style={{ display: 'flex', gap: '8px' }}>
							<input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="10-digit mobile number" required style={{ flex: 1, padding: '10px 14px', borderRadius: '7px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }} />
							<button type="button" onClick={handleSendOtp} style={{ padding: '10px 16px', background: '#1e293b', color: '#ffffff', border: 'none', borderRadius: '7px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>{otpSent ? 'Resend OTP' : 'Send OTP'}</button>
						</div>
						<div style={{ marginTop: '12px', padding: '12px', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
							<label htmlFor="otp" style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#475569', marginBottom: '4px' }}>Enter OTP (UI Prototype)</label>
							<input type="text" id="otp" name="otp" maxLength="6" value={formData.otp} onChange={handleChange} placeholder="6-digit verification code" style={{ width: '100%', maxWidth: '200px', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', letterSpacing: '0.15em', boxSizing: 'border-box' }} />
							<div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>* SMS OTP authentication engine will be connected in Phase 2.</div>
						</div>
					</div>

					<div>
						<label htmlFor="email" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>Email <span style={{ fontSize: '12px', fontWeight: '500', color: '#64748b' }}>(Optional)</span></label>
						<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="corporate@domain.org" style={{ width: '100%', padding: '10px 14px', borderRadius: '7px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }} />
					</div>

					<div>
						<label htmlFor="participationType" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>Participation Type <span style={{ color: '#ef4444' }}>*</span></label>
						<select id="participationType" name="participationType" value={formData.participationType} onChange={handleChange} required style={{ width: '100%', padding: '10px 14px', borderRadius: '7px', border: '1px solid #cbd5e1', fontSize: '14px', background: '#fff', boxSizing: 'border-box' }}>
							<option value="" disabled>-- Select Participation Type --</option>
							{PARTICIPATION_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
						</select>
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
						{[
							['state', 'State', 'e.g. Gujarat'],
							['district', 'District', 'e.g. Ahmedabad'],
							['cityVillageLocality', 'City / Village / Locality', 'e.g. Sanand']
						].map(([name, label, placeholder]) => (
							<div key={name}>
								<label htmlFor={name} style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>{label} <span style={{ color: '#ef4444' }}>*</span></label>
								<input type="text" id={name} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} required style={{ width: '100%', padding: '10px 14px', borderRadius: '7px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }} />
							</div>
						))}
					</div>

					<div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
						<input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required style={{ marginTop: '3px', cursor: 'pointer' }} />
						<label htmlFor="consent" style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', cursor: 'pointer' }}>I agree to establish an Earth Carbon Foundation member account, accept the sovereign platform guidelines, and authorize communications regarding verification and reporting.</label>
					</div>

					<div style={{ marginTop: '8px' }}>
						<button type="submit" style={{ width: '100%', background: '#15803d', color: '#ffffff', padding: '14px 24px', borderRadius: '8px', fontWeight: '800', fontSize: '15px', border: 'none', cursor: 'pointer' }}>Create My ECF Account</button>
					</div>
				</form>
			</div>
		</div>
	);
}
