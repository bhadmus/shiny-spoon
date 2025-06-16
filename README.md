<p align="center">
  <img src="./logo.png"/ width="100">
</p>
<h1 align="center"> A Sample Demo </h1>
<h3 align="center"> Being familiar with CI/CD </h3>


## Table of Contents

---


- [Dependencies](#dependencies)
- [Guide](#guide)
- [Execution](#execution)
- [Pipeline Config](#pipeline#config)
- [Contact](#contact)

## Dependencies

---
- [ ] [Python](https://www.python.org/downloads/)
- [ ] [Behave](https://pypi.org/project/behave/)
- [ ] [Faker](https://pypi.org/project/Faker/)
- [ ] [Selenium](https://pypi.org/project/selenium/)


## Guide

> [!NOTE]
> 
> Have Python installed and for best practice install a virtual environment.
> 
> You can install virtualenv to create one for instance or whichever way you prefer.



- Clone the repository into a desired location
- Open the cloned repository
- Start the virtual environment
- Open a terminal in it and run `pip install -r requirements.txt`

## Execution

You can run all tests locally from your project root using:

```bash
bash headless.sh
```
to run it headlessly

OR

```bash
bash non-headless.sh
```
to run it with a browser

Either of these would run the entire tests and also generate a report. 

## Pipeline Config

Added to the project is a pipeline config that runs the code in the pipeline. The report is stored as an artefact named `test-report`

## Contact

For any questions or concerns please reach out to me via my [email](mailto:bhadmusademola.1@gmail.com)