// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require materialize
//= require activestorage
//= require toastr
//= require_tree .

$(function() {
    $("#add_answer").hide();
    $("#answer").change(function() {
        $(this).find("option:selected").each(function(){
            var optVal = $(this).attr("value");
            if(optVal=='Escala')
                $("#add_answer").show();
            else
                $("#add_answer").hide();
        })
    });

    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        constrainWidth: false,
        alignment: 'right'
    });

    
    $('select').formSelect();

    $('.datepicker').datepicker({
        minDate: new Date()
    });
    $('.materialize-textarea').trigger('autoresize');

    $('#new_review').validate(
        {
            rules: {
                'review[relevance]': "required",
                'review[problem_def]': "required",
                'review[general_def]': "required",
                'review[specific_def]': "required",
                'review[confidence]': "required",
                'review[general_evaluation]': "required",
                'review[general_evaluation_text]': "required"
            },
            messages: {
                'review[relevance]': { required: "Debe elegir una opción <br/>" },
                'review[problem_def]': { required: "Debe elegir una opción <br/>" },
                'review[general_def]': { required: "Debe elegir una opción <br/>" },
                'review[specific_def]': { required: "Debe elegir una opción <br/>" },
                'review[confidence]': { required: "Debe elegir una opción <br/>" },
                'review[general_evaluation]': { required: "Debe elegir una opción <br/>" },
                'review[general_evaluation_text]': { required: "Campo obligatorio <br/>" }
            },
            errorPlacement: function(error, element) {
                if (element.attr("type") == "radio") {
                    error.prependTo(element.parent());
                }else{
                    error.insertBefore(element.parent());
                }
            }
        });

    $('#new_paper').validate({
        rules: {
            'paper[title]': 'required',
            'paper[problem_definition]': 'required',
            'paper[general_purpose]': 'required',
            'paper[specific_purpose]': 'required'
        },
        messages: {
            'paper[title]': { required: 'Campo obligatorio'},
            'paper[problem_definition]': {required: 'Campo obligatorio'},
            'paper[general_purpose]': {required:'Campo obligatorio'},
            'paper[specific_purpose]': {required:'Campo obligatorio'}
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });

    $('.edit_paper').validate({
        rules: {
            'paper[title]': 'required',
            'paper[problem_definition]': 'required',
            'paper[general_purpose]': 'required',
            'paper[specific_purpose]': 'required'
        },
        messages: {
            'paper[title]': { required: 'Campo obligatorio'},
            'paper[problem_definition]': {required: 'Campo obligatorio'},
            'paper[general_purpose]': {required:'Campo obligatorio'},
            'paper[specific_purpose]': {required:'Campo obligatorio'}
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
})