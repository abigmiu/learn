import requests
import re
sdurl = 'https://acgnn.cyou/ptl.php?mb=ptl&pages=MTYyNDk3MzU3MA&t=eHpfNk9nYg&time=2021_06_29_21_32_53&akey=Sm91bmc&alog=Sm91bmc&times=0&suourl=sssss.cyou'
def run():
    try:
        for f in range(20000):
            f = f + 1
            f = str(f)
            url = 'https://ip.jiangxianli.com/?page=' + f
            heands = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.58'
            }
            iptxt = requests.get(url, headers=heands).text
            pattern = re.compile('(?<=<button class="layui-btn layui-btn-sm btn-copy" data-url=).*(?= data-unique-id=)')
            ip = pattern.findall(iptxt)
            ip = str(ip).replace('"', '')
            pattern = re.compile('[a-zA-z]+://[^\s]*')
            ipps = pattern.findall(ip)
            n = 1
            for x in ipps:
                try:
                    ixp = {'http': ipps[n]}
                    print(ixp)
                    uag = requests.get(url='http://nmsl8.com/getUA').text
                    heands = {
                        'User-Agent': uag
                    }
                    print(heands)
                    requests.get(sdurl, proxies=ixp, headers=heands, timeout=3)
                    n = n + 1
                    print('成功')

                except:
                    print('代理IP异常')

    except:
        print('IP池获取异常')

def main_handler(event, context):
    run()

if __name__ == '__main__':
    run()