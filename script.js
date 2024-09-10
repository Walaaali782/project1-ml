const walaa = document.getElementById('surveyForm');



walaa.innerHTML= `
      <div class="question">
    <label>1. Do you frequently feel sad or depressed?</label>
    <select name="q1" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>2. Do you have difficulty concentrating?</label>
    <select name="q2" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>3. Do you have difficulty falling asleep or waking up early?</label>
    <select name="q3" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>4. Do you feel tired or exhausted all the time?</label>
    <select name="q4" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>5. Do you lose interest in activities you used to enjoy?</label>
    <select name="q5" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>6. Do you have difficulty making decisions?</label>
    <select name="q6" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>7. Do you feel constantly anxious or agitated?</label>
    <select name="q7" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>8. Do you have difficulty sitting still?</label>
    <select name="q8" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>9. Do you feel fearful or anxious about the future?</label>
    <select name="q9" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>10. Do you have frequent negative thoughts?</label>
    <select name="q10" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>11. Do you have difficulty coping with everyday stress?</label>
    <select name="q11" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>12. Do you suffer from loss of appetite or overeating?</label>
    <select name="q12" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>13. Do you have difficulty making friends or socializing?</label>
    <select name="q13" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>14. Do you feel dissatisfied with your life?</label>
    <select name="q14" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>15. Do you suffer from panic attacks or intense fear?</label>
    <select name="q15" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>16. Do you feel like you have no control over your emotions?</label>
    <select name="q16" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>17. Do you suffer from excessive stress?</label>
    <select name="q17" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>18. Do you have difficulty expressing your feelings to others?</label>
    <select name="q18" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>19. Do you feel insecure?</label>
    <select name="q19" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>

<div class="question">
    <label>20. Do you have difficulty keeping your home clean or taking care of yourself?</label>
    <select name="q20" required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>


            <button type="submit">Submit</button>
`;






document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const formData = new FormData(this);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });
    
  
    let depressionCount = 0;
    let anxietyCount = 0;

    for (let answer in answers) {
        if (answers[answer] === 'yes') {
            if (["q1", "q5", "q9", "q13", "q17"].includes(answer)) depressionCount++;
            if (["q2", "q6", "q10", "q14", "q18"].includes(answer)) anxietyCount++;
        }
    }

 let resultText = '';
    if (depressionCount >= 3) {
        resultText = 'Based on your answers, you may be experiencing symptoms of depression.';
    } else if (anxietyCount >= 3) {
        resultText = 'Based on your answers, you may be experiencing symptoms of anxiety.';
    } else {
        resultText = 'Your responses do not strongly indicate a specific mental illness, but please consult a professional for a full evaluation.';
    }

    document.getElementById('result').textContent = resultText;
});