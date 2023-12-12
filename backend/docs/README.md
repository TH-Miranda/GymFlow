# Backend Setup Guide

This guide provides instructions on how to set up and run the backend on a machine. It includes steps for setting the `MONGO_URI` environment variable on Windows, Linux, and macOS.

## Prerequisites
- Python virtualenv

## Steps

1. Clone the repository to your local machine.

2. Navigate to the backend directory.

3. Create a virtual environment using Python virtualenv:
    ```shell
    python -m venv env
    ```

4. Activate the virtual environment:
    - Windows:
      ```shell
      .\env\Scripts\activate
      ```
    - Linux/macOS:
      ```shell
      source env/bin/activate
      ```

5. Install the required dependencies:
    ```shell
    pip install -r requirements.txt
    ```

6. Set the `MONGO_URI` environment variable:
    - Windows:
      ```shell
      set MONGO_URI=<your_mongo_uri>
      ```
    - Linux/macOS:
      ```shell
      export MONGO_URI=<your_mongo_uri>
      ```

7. Run the backend server:
    ```shell
    python server/main.py
    ```

8. The backend server should now be running on your local machine.

Note: Make sure to replace `<your_mongo_uri>` with the actual MongoDB connection URI.

For more information, please refer to the project's README file.
