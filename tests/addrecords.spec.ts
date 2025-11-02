import { test, expect } from '@playwright/test';

test('add new nursing case with validation', async ({ page }) => {
  // Navigate to the app
  await page.goto('https://chris99-j.github.io/nursing-case/');

  // Fill out the patient form
  await page.getByRole('textbox', { name: 'Patient Name:' }).fill('Test Patient');
  await page.getByRole('spinbutton', { name: 'Age:' }).fill('30');
  await page.getByLabel('Sex: Select Male Female Other').selectOption('Male');

  await page.getByRole('textbox', { name: 'Nursing/Nurse Diagnosis:' }).fill('Test nursing diagnosis');
  await page.getByRole('textbox', { name: 'Doctor Diagnosis:' }).fill('Test doctor diagnosis');
  await page.getByRole('textbox', { name: 'History:' }).fill('Patient history test');
  await page.getByRole('textbox', { name: 'Case Summary:' }).fill('Case summary test');

  await page.getByLabel('Status: Select Open In').selectOption('Open');
  await page.getByRole('textbox', { name: 'Assigned Nurse:' }).fill('Test Nurse');

  // Submit the form
  await page.getByRole('button', { name: 'Add Case' }).click();

  // Assertions: verify the new case appears in the patient list
  const patientName = page.locator('#patientList >> text=Test Patient');
  const caseSummary = page.locator('#caseList >> text=Case summary test');

  await expect(patientName).toBeVisible();
  await expect(caseSummary).toBeVisible();

  // Optional: verify form cleared after submission
  await expect(page.getByRole('textbox', { name: 'Patient Name:' })).toHaveValue('');
  await expect(page.getByRole('spinbutton', { name: 'Age:' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Nursing/Nurse Diagnosis:' })).toHaveValue('');
});
