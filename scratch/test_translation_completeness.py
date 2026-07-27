import re
import os

def load_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def main():
    workspace_dir = "/Users/tomerkot/Portfolio site"
    index_path = os.path.join(workspace_dir, "index.html")
    trans_path = os.path.join(workspace_dir, "translations.js")
    css_path = os.path.join(workspace_dir, "styles.css")
    js_path = os.path.join(workspace_dir, "app.js")
    
    print("--- Starting Automated Portfolio Code Audits ---")
    
    # 1. Check if files exist
    for p in [index_path, trans_path, css_path, js_path]:
        if not os.path.exists(p):
            print(f"ERROR: File {p} is missing!")
            return
    print("✓ All core source files exist.")

    # 2. Assert Splunk exclusion
    splunk_found = False
    for p in [index_path, trans_path, css_path, js_path]:
        content = load_file(p).lower()
        if "splunk" in content:
            print(f"ERROR: Forbidden word 'Splunk' found in {p}!")
            splunk_found = True
    if not splunk_found:
        print("✓ Verification successful: No references to 'Splunk' found in the codebase.")
    
    # 3. Read translations
    trans_content = load_file(trans_path)
    
    # Use regex to parse languages and keys roughly from translations.js
    # We will look for keys inside en: { ... }, uk: { ... }, de: { ... }
    en_block = re.search(r'en:\s*\{(.*?)\},', trans_content, re.DOTALL)
    uk_block = re.search(r'uk:\s*\{(.*?)\},', trans_content, re.DOTALL)
    de_block = re.search(r'de:\s*\{(.*?)\}\s*\n*};', trans_content, re.DOTALL)
    
    if not (en_block and uk_block and de_block):
        print("ERROR: Failed to extract language blocks from translations.js")
        return
        
    def extract_keys(block_text):
        # find keys like "nav-about": "About",
        matches = re.findall(r'"([^"]+)"\s*:', block_text)
        return set(matches)

    en_keys = extract_keys(en_block.group(1))
    uk_keys = extract_keys(uk_block.group(1))
    de_keys = extract_keys(de_block.group(1))

    print(f"✓ Parsed translation keys - EN: {len(en_keys)}, UK: {len(uk_keys)}, DE: {len(de_keys)}")
    
    # Check if keys are identical across languages
    all_keys = en_keys.union(uk_keys).union(de_keys)
    missing_in_en = all_keys - en_keys
    missing_in_uk = all_keys - uk_keys
    missing_in_de = all_keys - de_keys
    
    if missing_in_en: print(f"WARNING: Keys missing in EN: {missing_in_en}")
    if missing_in_uk: print(f"WARNING: Keys missing in UK: {missing_in_uk}")
    if missing_in_de: print(f"WARNING: Keys missing in DE: {missing_in_de}")
    
    if not (missing_in_en or missing_in_uk or missing_in_de):
        print("✓ All translation keys are fully aligned across EN, UK, and DE.")

    # 4. Parse index.html and find data-i18n and data-i18n-placeholder values
    index_content = load_file(index_path)
    
    i18n_values = re.findall(r'data-i18n="([^"]+)"', index_content)
    placeholder_values = re.findall(r'data-i18n-placeholder="([^"]+)"', index_content)
    
    print(f"✓ Found {len(i18n_values)} elements with data-i18n and {len(placeholder_values)} elements with data-i18n-placeholder.")
    
    # Check for missing translation keys for elements
    missing_translations = []
    for val in i18n_values:
        if val not in en_keys:
            missing_translations.append((val, "data-i18n"))
            
    for val in placeholder_values:
        if val not in en_keys:
            missing_translations.append((val, "placeholder"))
            
    if missing_translations:
        print(f"ERROR: Missing translations in translations.js for the following HTML keys:")
        for k, t in missing_translations:
            print(f"  - Key: '{k}' (type: {t})")
    else:
        print("✓ All HTML data-i18n keys are correctly defined in translations.js.")

    # 5. Verify Resume CTA buttons are present and point to correct assets
    btn_en = re.search(r'href="assets/cv-en.pdf"\s+download="Vadym_Vatskovskyi_CV_EN.pdf"', index_content)
    btn_uk = re.search(r'href="assets/cv-uk.pdf"\s+download="Vadym_Vatskovskyi_CV_UA.pdf"', index_content)
    btn_de = re.search(r'href="assets/cv-de.pdf"\s+download="Vadym_Vatskovskyi_Lebenslauf_DE.pdf"', index_content)
    
    if btn_en and btn_uk and btn_de:
        print("✓ All three Resume CTA buttons are present and map to corresponding assets and download names.")
    else:
        print("ERROR: Resume download anchors are misconfigured in index.html!")
        if not btn_en: print("  - Missing/misconfigured English CV button link")
        if not btn_uk: print("  - Missing/misconfigured Ukrainian CV button link")
        if not btn_de: print("  - Missing/misconfigured German CV button link")

    # 6. Verify placeholders exist in assets/ directory
    for cv in ["cv-en.pdf", "cv-uk.pdf", "cv-de.pdf"]:
        cv_path = os.path.join(workspace_dir, "assets", cv)
        if os.path.exists(cv_path):
            print(f"✓ Asset {cv} is present (size: {os.path.getsize(cv_path)} bytes).")
        else:
            print(f"ERROR: Asset {cv_path} is missing!")
            
    print("--- Portfolio Verification Audits Completed ---")

if __name__ == "__main__":
    main()
