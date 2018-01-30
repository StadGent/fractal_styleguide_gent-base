all

rule 'MD026', :punctuation => ".,;:!"
rule 'MD029', :style => "ordered"

exclude_rule "MD024"
exclude_rule "MD028"
exclude_rule "MD033" # Until https://github.com/markdownlint/markdownlint/issues/189 is fixed 
exclude_rule "MD041"
