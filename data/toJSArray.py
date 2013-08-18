with open('data_movie.txt','r') as f, open('data_movie.js','w+') as out:
  for line in f.readlines():

    out.write("\""+line.strip()+"\",\n")

