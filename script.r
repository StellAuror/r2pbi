source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("ggplot2");
libraryRequireInstall("plotly")
libraryRequireInstall("dplyr")
####################################################

################### Actual code ####################
g = 
  ggplot(
      summarise(group_by(Values, Country), Sales = sum(Sales)),
      aes(
          x = Country,
          y = Sales
      )
  ) + 
  geom_col() + 
  theme_minimal() +
  theme(text = element_text(size = 24));
####################################################

############# Create and save widget ###############
p = ggplotly(g);
internalSaveWidget(p, 'out.html');
####################################################

################ Reduce paddings ###################
ReadFullFileReplaceString('out.html', 'out.html', ',"padding":[0-9]*,', ',"padding":0,')
####################################################
