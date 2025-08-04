        function toggleAnswer(questionId) {
            const answerDiv = document.getElementById(`answer-${questionId}`);
            const button = document.getElementById(`button-${questionId}`);

            if (answerDiv.classList.contains('hidden')) {
                answerDiv.classList.remove('hidden');
                answerDiv.classList.add('block');
                button.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" /></svg>`;
            } else {
                answerDiv.classList.remove('block');
                answerDiv.classList.add('hidden');
                button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>`;
            }
        }
        toggleAnswer(questionId);


        
        
